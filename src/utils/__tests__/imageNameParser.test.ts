import { ImageNameParser } from '../imageNameParser';

describe('ImageNameParser', () => {
  let parser: ImageNameParser;

  beforeEach(() => {
    parser = new ImageNameParser();
  });

  describe('parseImageName', () => {
    it('should parse simple file names', () => {
      expect(parser.parseImageName('profile.jpg')).toBe('Profile');
      expect(parser.parseImageName('user-avatar.png')).toBe('User Avatar');
      expect(parser.parseImageName('product_image_1.webp')).toBe('Product Image 1');
    });

    it('should handle camelCase', () => {
      expect(parser.parseImageName('userProfile.jpg')).toBe('User Profile');
      expect(parser.parseImageName('productImage.png')).toBe('Product Image');
    });

    it('should handle numbers', () => {
      expect(parser.parseImageName('image123.jpg')).toBe('Image 123');
      expect(parser.parseImageName('photo_2023.png')).toBe('Photo 2023');
    });

    it('should remove file extensions', () => {
      expect(parser.parseImageName('image.jpg')).toBe('Image');
      expect(parser.parseImageName('photo.png')).toBe('Photo');
      expect(parser.parseImageName('avatar.webp')).toBe('Avatar');
    });

    it('should handle empty input', () => {
      expect(parser.parseImageName('')).toBe('');
      expect(parser.parseImageName(null as any)).toBe('');
      expect(parser.parseImageName(undefined as any)).toBe('');
    });
  });

  describe('parseFromSrc', () => {
    it('should extract filename from URL and parse it', () => {
      expect(parser.parseFromSrc('/images/profile.jpg')).toBe('Profile');
      expect(parser.parseFromSrc('https://example.com/images/user-avatar.png')).toBe('User Avatar');
      expect(parser.parseFromSrc('/assets/product_image_1.webp?version=2')).toBe('Product Image 1');
    });

    it('should handle URLs with query parameters', () => {
      expect(parser.parseFromSrc('/image.jpg?v=123')).toBe('Image');
      expect(parser.parseFromSrc('/photo.png?width=300&height=200')).toBe('Photo');
    });
  });

  describe('with custom options', () => {
    it('should add prefix and suffix', () => {
      const customParser = new ImageNameParser({
        prefix: 'Photo of',
        suffix: 'image',
      });
      expect(customParser.parseImageName('profile.jpg')).toBe('Photo of Profile image');
    });

    it('should use custom mappings', () => {
      const customParser = new ImageNameParser({
        customMappings: {
          'profile': 'User Profile Picture',
          'avatar': 'User Avatar Image',
        },
      });
      expect(customParser.parseImageName('profile.jpg')).toBe('User Profile Picture');
      expect(customParser.parseImageName('avatar.png')).toBe('User Avatar Image');
    });

    it('should remove numbers when configured', () => {
      const customParser = new ImageNameParser({
        removeNumbers: true,
      });
      expect(customParser.parseImageName('image123.jpg')).toBe('Image');
      expect(customParser.parseImageName('photo_2023.png')).toBe('Photo');
    });

    it('should not capitalize when configured', () => {
      const customParser = new ImageNameParser({
        capitalize: false,
      });
      expect(customParser.parseImageName('profile.jpg')).toBe('profile');
      expect(customParser.parseImageName('user-avatar.png')).toBe('user avatar');
    });
  });
}); 
import { transform } from '@babel/core';
import babelPlugin from '../babel-plugin';

describe('Babel Plugin', () => {
  const transformCode = (code: string, options: any = {}) => {
    return transform(code, {
      presets: ['@babel/preset-react'],
      plugins: [[babelPlugin, options]],
      filename: 'test.jsx'
    });
  };

  it('should add alt and title to img tags without them', () => {
    const input = `
      function Test() {
        return (
          <div>
            <img src="/images/user-profile.jpg" />
            <img src="/images/avatar.png" />
          </div>
        );
      }
    `;

    const result = transformCode(input);
    expect(result?.code).toContain('alt: "User Profile"');
    expect(result?.code).toContain('title: "User Profile"');
    expect(result?.code).toContain('alt: "Avatar"');
    expect(result?.code).toContain('title: "Avatar"');
  });

  it('should not override existing alt and title attributes', () => {
    const input = `
      function Test() {
        return (
          <div>
            <img src="/images/user-profile.jpg" alt="Custom Alt" title="Custom Title" />
          </div>
        );
      }
    `;

    const result = transformCode(input);
    expect(result?.code).toContain('alt: "Custom Alt"');
    expect(result?.code).toContain('title: "Custom Title"');
    expect(result?.code).not.toContain('alt: "User Profile"');
  });

  it('should handle empty alt and title attributes', () => {
    const input = `
      function Test() {
        return (
          <div>
            <img src="/images/user-profile.jpg" alt="" title="" />
          </div>
        );
      }
    `;

    const result = transformCode(input);
    expect(result?.code).toContain('alt: "User Profile"');
    expect(result?.code).toContain('title: "User Profile"');
  });

  it('should respect custom parser options', () => {
    const input = `
      function Test() {
        return (
          <div>
            <img src="/images/user-profile.jpg" />
          </div>
        );
      }
    `;

    const result = transformCode(input, {
      parserOptions: {
        prefix: 'Photo of',
        suffix: 'image'
      }
    });

    expect(result?.code).toContain('alt: "Photo of User Profile image"');
    expect(result?.code).toContain('title: "Photo of User Profile image"');
  });

  it('should respect generateAlt and generateTitle options', () => {
    const input = `
      function Test() {
        return (
          <div>
            <img src="/images/user-profile.jpg" />
          </div>
        );
      }
    `;

    const result = transformCode(input, {
      generateAlt: false,
      generateTitle: true
    });

    expect(result?.code).not.toContain('alt: "User Profile"');
    expect(result?.code).toContain('title: "User Profile"');
  });

  it('should use fallback values when generation fails', () => {
    const input = `
      function Test() {
        return (
          <div>
            <img src="/images/" />
          </div>
        );
      }
    `;

    const result = transformCode(input, {
      fallbackAlt: 'Default Alt',
      fallbackTitle: 'Default Title'
    });

    expect(result?.code).toContain('alt: "Default Alt"');
    expect(result?.code).toContain('title: "Default Title"');
  });

  it('should handle file filtering with include option', () => {
    const input = `
      function Test() {
        return (
          <div>
            <img src="/images/user-profile.jpg" />
          </div>
        );
      }
    `;

    const result = transformCode(input, {
      include: ['components']
    });

    // File name is 'test.jsx' so include pattern doesn't match
    // Therefore alt/title should not be added
    expect(result?.code).not.toContain('alt: "User Profile"');
  });

  it('should handle file filtering with exclude option', () => {
    const input = `
      function Test() {
        return (
          <div>
            <img src="/images/user-profile.jpg" />
          </div>
        );
      }
    `;

    const result = transformCode(input, {
      exclude: ['test']
    });

    // File name is 'test.jsx' so exclude pattern matches
    // Therefore alt/title should not be added
    expect(result?.code).not.toContain('alt: "User Profile"');
  });

  it('should handle self-closing img tags correctly', () => {
    const input = `
      function Test() {
        return (
          <div>
            <img src="/test-image.jpg" />
            <img src="/company-logo.svg" />
          </div>
        );
      }
    `;

    const result = transformCode(input);
    
    // Self-closing img tags should work the same as regular img tags
    expect(result?.code).toContain('alt: "Test Image"');
    expect(result?.code).toContain('title: "Test Image"');
    expect(result?.code).toContain('alt: "Company Logo"');
    expect(result?.code).toContain('title: "Company Logo"');
  });

  it('should handle both self-closing and regular img tags in the same file', () => {
    const input = `
      function Test() {
        return (
          <div>
            <img src="/test-image.jpg" />
            <img src="/company-logo.svg"></img>
          </div>
        );
      }
    `;

    const result = transformCode(input);
    
    // Both types should work
    expect(result?.code).toContain('alt: "Test Image"');
    expect(result?.code).toContain('title: "Test Image"');
    expect(result?.code).toContain('alt: "Company Logo"');
    expect(result?.code).toContain('title: "Company Logo"');
  });

  it('should not process non-img tags', () => {
    const input = `
      function Test() {
        return (
          <div>
            <div src="/test-image.jpg" />
            <span src="/company-logo.svg" />
          </div>
        );
      }
    `;

    const result = transformCode(input);
    
    // Should not add alt/title to non-img tags
    expect(result?.code).not.toContain('alt: "Test Image"');
    expect(result?.code).not.toContain('title: "Test Image"');
  });
}); 
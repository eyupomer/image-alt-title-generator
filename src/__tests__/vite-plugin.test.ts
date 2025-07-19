import vitePlugin from '../vite-plugin';

describe('Vite Plugin', () => {
  const createPlugin = (options: any = {}) => {
    return vitePlugin(options);
  };

  it('should add alt and title to img tags without them', () => {
    const plugin = createPlugin();
    const input = `
      <div>
        <img src="/images/user-profile.jpg" />
        <img src="/images/avatar.png" />
      </div>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'test.html');
    expect(result?.code).toContain('alt="User Profile"');
    expect(result?.code).toContain('title="User Profile"');
    expect(result?.code).toContain('alt="Avatar"');
    expect(result?.code).toContain('title="Avatar"');
  });

  it('should not override existing alt and title attributes', () => {
    const plugin = createPlugin();
    const input = `
      <div>
        <img src="/images/user-profile.jpg" alt="Custom Alt" title="Custom Title" />
      </div>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'test.html');
    // If alt and title already exist, plugin should not change them
    // In this case result should be null because no changes were made
    expect(result).toBeNull();
  });

  it('should handle empty alt and title attributes', () => {
    const plugin = createPlugin();
    const input = `
      <div>
        <img src="/images/user-profile.jpg" alt="" title="" />
      </div>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'test.html');
    expect(result?.code).toContain('alt="User Profile"');
    expect(result?.code).toContain('title="User Profile"');
  });

  it('should respect custom parser options', () => {
    const plugin = createPlugin({
      parserOptions: {
        prefix: 'Photo of',
        suffix: 'image'
      }
    });
    
    const input = `
      <div>
        <img src="/images/user-profile.jpg" />
      </div>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'test.html');
    expect(result?.code).toContain('alt="Photo of User Profile image"');
    expect(result?.code).toContain('title="Photo of User Profile image"');
  });

  it('should respect generateAlt and generateTitle options', () => {
    const plugin = createPlugin({
      generateAlt: false,
      generateTitle: true
    });
    
    const input = `
      <div>
        <img src="/images/user-profile.jpg" />
      </div>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'test.html');
    expect(result?.code).not.toContain('alt="User Profile"');
    expect(result?.code).toContain('title="User Profile"');
  });

  it('should use fallback values when generation fails', () => {
    const plugin = createPlugin({
      fallbackAlt: 'Default Alt',
      fallbackTitle: 'Default Title'
    });
    
    const input = `
      <div>
        <img src="/images/" />
      </div>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'test.html');
    expect(result?.code).toContain('alt="Default Alt"');
    expect(result?.code).toContain('title="Default Title"');
  });

  it('should handle file filtering with include option', () => {
    const plugin = createPlugin({
      include: ['components']
    });
    
    const input = `
      <div>
        <img src="/images/user-profile.jpg" />
      </div>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'src/components/test.html');
    expect(result?.code).toContain('alt="User Profile"');
  });

  it('should handle file filtering with exclude option', () => {
    const plugin = createPlugin({
      exclude: ['test']
    });
    
    const input = `
      <div>
        <img src="/images/user-profile.jpg" />
      </div>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'src/components/test.html');
    // exclude pattern 'test' exists in file path, so it should not be processed
    expect(result).toBeNull();
  });

  it('should not process non-HTML files', () => {
    const plugin = createPlugin();
    const input = `
      <div>
        <img src="/images/user-profile.jpg" />
      </div>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'test.css');
    expect(result).toBeNull();
  });

  it('should not process files without img tags', () => {
    const plugin = createPlugin();
    const input = `
      <div>
        <p>Hello World</p>
      </div>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'test.html');
    expect(result).toBeNull();
  });

  it('should handle Vue files', () => {
    const plugin = createPlugin();
    const input = `
      <template>
        <div>
          <img src="/images/logo.png" />
        </div>
      </template>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'test.vue');
    expect(result?.code).toContain('alt="Logo"');
    expect(result?.code).toContain('title="Logo"');
  });

  it('should handle Svelte files', () => {
    const plugin = createPlugin();
    const input = `
      <div>
        <img src="/images/banner.jpg" />
      </div>
    `;

    const transformHook = plugin.transform as any;
    const result = transformHook.call({}, input, 'test.svelte');
    expect(result?.code).toContain('alt="Banner"');
    expect(result?.code).toContain('title="Banner"');
  });
}); 
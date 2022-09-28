# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

Slim::Engine.set_options shortcut: {
  '#' => { tag: 'div', attr: 'id' }, '.' => { tag: 'div', attr: 'class' }
}

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
page '/pages/*', layout: 'page_layout'
page '/en/*', layout: 'layout_en'
page '/es/*', layout: 'layout_es'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  #helper to set background images with asset hashes in a style attribute
  def background_image(image)
    "background-image: url('" << image_path(image) << "')"
  end
  
  def nav_link(link_text, url, options = {})
    options[:class] ||= ""
    options[:class] << " active" if url == current_page.url
    link_to(link_text, url, options)
  end

  def markdown(content)
     Tilt['markdown'].new(context: @app) { content }.render
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

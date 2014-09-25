Capybara::Node::Element.class_eval do
  def click_at(x, y)
    wait_until do
      right = x - (native.size.width / 2)
      top = y - (native.size.height / 2)
      driver.browser.action.move_to(native).move_by(right.to_i, top.to_i).click.perform
    end
  end
end
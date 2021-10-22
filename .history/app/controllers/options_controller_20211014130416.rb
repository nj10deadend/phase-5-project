class OptionsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :confirm_authentication
end

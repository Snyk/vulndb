## Overview
[`activemodel`](https://rubygems.org/gems/activemodel) is a toolkit for building modeling framework like Active Record.
Affected versions of this Gem are vulnerable to Input Validation Bypass Attacks.

## Details
Code that uses Active Model based models (including Active Record models) and does not validate user input before passing it to the model can be subject to an attack where specially crafted input will cause the model to skip validations. 		

Vulnerable code will look something like this: 		
```ruby 		
SomeModel.new(unverified_user_input) 		
``` 		

Rails users using Strong Parameters are generally not impacted by this issue as they are encouraged to whitelist parameters and must specifically opt-out of input verification using the `permit!` method to allow mass assignment. 
For example, a vulnerable Rails application will have code that looks like this: 		
```ruby
def create 		
params.permit! # allow all parameters 		
@user = User.new params[:users] 		
end 		
``` 		
		
Active Model and Active Record objects are not equipped to handle arbitrary user input.  It is up to the application to verify input before passing it to Active Model models.  Rails users already have Strong Parameters in place to handle white listing, but applications using Active Model and Active Record outside of a Rails environment may be impacted. 		

## References
- http://rubysec.com/advisories/CVE-2016-0753
- https://groups.google.com/forum/#!topic/rubyonrails-security/6jQVC1geukQ

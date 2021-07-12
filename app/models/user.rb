# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: {message: 'Password can\'t be blank'}
  validates :password, length: {minimum: 8, allow_nil: true}
  validate :validateEmail
  attr_reader :password
  after_initialize :ensure_session_token
  #figvaper
  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return @user if @user && @user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def validateEmail
    errors[:Email] << "is not valid" if self.email.split('@').length != 2
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(@password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token = self.class.generate_session_token
  end
end

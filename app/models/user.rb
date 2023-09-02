class User < ApplicationRecord
    has_secure_password
    has_many :todos ,dependent: :destroy
    validates :name, presence: true
    validates :email, format: {with: /\S+@\S+/ },
              uniqueness:{case_sensative: false}
end

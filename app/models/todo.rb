class Todo < ApplicationRecord
    validates :title, presence: true, length: { minimum: 4 }
    
end

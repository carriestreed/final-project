class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :url
      t.string :title
      t.text :description
      t.string :author
      t.string :date
      t.string :location

      t.timestamps null: false
    end
  end
end

import tensorflow as tf

train_dir = 'training_2 classes'
img_height = 180
img_width = 180
batch_size = 32

train_ds = tf.keras.utils.image_dataset_from_directory(
    train_dir,
    validation_split=0.2,
    subset="training",
    seed=123,
    image_size=(img_height, img_width),
    batch_size=batch_size
)

for images, labels in train_ds.take(1):
    print(images.shape)
    print(labels.numpy())

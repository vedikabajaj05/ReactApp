import os

train_dir = "training_2 classes"
test_dir = "testing_2 classes"

print("Training directory contents:")
for cls in os.listdir(train_dir):
    cls_path = os.path.join(train_dir, cls)
    print(f"Class: {cls}")
    print("Files:", os.listdir(cls_path))

print("\nTesting directory contents:")
for cls in os.listdir(test_dir):
    cls_path = os.path.join(test_dir, cls)
    print(f"Class: {cls}")
    print("Files:", os.listdir(cls_path))

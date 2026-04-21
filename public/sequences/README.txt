# Drop your image sequences here.
#
# Folder structure:
#   public/sequences/hero-chair/chair_0001.webp ... chair_0075.webp
#   public/sequences/scroll-story/frame_0001.webp ... frame_0080.webp
#
# Generate with ffmpeg:
#   ffmpeg -i input.mp4 -vf "fps=15,scale=1500:-1" -q:v 2 chair_%04d.webp

# Video Assets

Place your background video file here with the name `sample-video.mp4` (or update the filename in `src/app/page.tsx`).

## Recommended Video Specifications:

- Format: MP4 (H.264) and WebM for better browser compatibility
- Resolution: 1920x1080 (1080p) or 1280x720 (720p)
- File size: 5-10MB (compress using tools like HandBrake or FFmpeg)
- Duration: 10-30 seconds (loop-friendly)
- Frame rate: 24-30 fps
- No audio track (will be muted anyway)

## Compression Command Example (FFmpeg):

```bash
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 22 -vf scale=1920:1080 -an sample-video.mp4
```

## Free Stock Video Resources:

- Pexels: https://www.pexels.com/videos/
- Mixkit: https://mixkit.co/
- Coverr: https://coverr.co/

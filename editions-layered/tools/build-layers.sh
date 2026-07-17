#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
SOURCE_DIR="$ROOT/assets"
OUTPUT_DIR="$ROOT/editions-layered/assets/scenes"

mkdir -p "$OUTPUT_DIR"

if ! command -v magick >/dev/null 2>&1; then
  echo "ImageMagick (magick) is required." >&2
  exit 1
fi

CANVAS="1600x900"
WEBP_ARGS=(-define webp:method=6 -define webp:thread-level=1)

build_scene() {
  local name="$1"
  local source="$2"
  local subject_ellipse="$3"
  local mid_ellipse="$4"
  local foreground_y="$5"

  echo "Building layered scene: $name"

  magick "$source" \
    -auto-orient -resize "${CANVAS}^" -gravity center -extent "$CANVAS" \
    -modulate 70,78,98 -blur 0x2.2 \
    "${WEBP_ARGS[@]}" -quality 70 \
    "$OUTPUT_DIR/${name}-bg.webp"

  magick \
    \( "$source" -auto-orient -resize "${CANVAS}^" -gravity center -extent "$CANVAS" \
      -modulate 92,94,100 -blur 0x0.65 \) \
    \( -size "$CANVAS" xc:black -fill white -draw "ellipse $mid_ellipse" -blur 0x76 \) \
    -alpha off -compose CopyOpacity -composite \
    "${WEBP_ARGS[@]}" -quality 76 \
    "$OUTPUT_DIR/${name}-mid.webp"

  magick \
    \( "$source" -auto-orient -resize "${CANVAS}^" -gravity center -extent "$CANVAS" \
      -modulate 104,104,100 -unsharp 0x0.7+0.55+0.02 \) \
    \( -size "$CANVAS" xc:black -fill white -draw "ellipse $subject_ellipse" -blur 0x46 \) \
    -alpha off -compose CopyOpacity -composite \
    "${WEBP_ARGS[@]}" -quality 82 \
    "$OUTPUT_DIR/${name}-subject.webp"

  magick \
    \( "$source" -auto-orient -resize "${CANVAS}^" -gravity center -extent "$CANVAS" \
      -modulate 82,88,98 -blur 0x1.1 \) \
    \( -size "$CANVAS" xc:black -fill white \
      -draw "rectangle 0,${foreground_y} 1600,900" -blur 0x66 \) \
    -alpha off -compose CopyOpacity -composite \
    "${WEBP_ARGS[@]}" -quality 74 \
    "$OUTPUT_DIR/${name}-fore.webp"
}

build_scene \
  "00-origin" \
  "$SOURCE_DIR/city-clean.jpg" \
  "1370,535 365,360 0,360" \
  "1200,430 700,500 0,360" \
  "660"

build_scene \
  "01-signal" \
  "$SOURCE_DIR/hero-decision-chamber.png" \
  "555,430 340,340 0,360" \
  "690,430 650,480 0,360" \
  "650"

build_scene \
  "02-complexity" \
  "$SOURCE_DIR/run.jpg" \
  "800,520 520,345 0,360" \
  "800,460 750,505 0,360" \
  "555"

build_scene \
  "03-intelligence" \
  "$SOURCE_DIR/data-14.jpg" \
  "800,475 555,385 0,360" \
  "800,470 760,510 0,360" \
  "570"

build_scene \
  "04-momentum" \
  "$SOURCE_DIR/hero-01.jpg" \
  "930,555 550,425 0,360" \
  "1070,430 690,490 0,360" \
  "620"

magick "$SOURCE_DIR/cloud.jpg" \
  -auto-orient -resize "${CANVAS}^" -gravity center -extent "$CANVAS" \
  -modulate 104,92,100 -alpha set -channel A -evaluate set 42% +channel \
  "${WEBP_ARGS[@]}" -quality 68 \
  "$OUTPUT_DIR/atmosphere-gold.webp"

magick "$SOURCE_DIR/data-system.jpg" \
  -auto-orient -resize "${CANVAS}^" -gravity center -extent "$CANVAS" \
  -modulate 88,105,100 -alpha set -channel A -evaluate set 30% +channel \
  "${WEBP_ARGS[@]}" -quality 68 \
  "$OUTPUT_DIR/atmosphere-data.webp"

echo "Layer assets written to: $OUTPUT_DIR"

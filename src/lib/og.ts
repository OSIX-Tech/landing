// Social preview images. Covers are 16:9 PNGs; crawlers want a 1200-wide JPEG at a URL.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

export async function ogImage(cover: ImageMetadata) {
  const img = await getImage({ src: cover, width: 1200, height: 675, format: 'jpg', quality: 82 });
  return img.src;
}

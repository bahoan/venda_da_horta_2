import { useState, useEffect } from 'react';

export default function OptimizedImage({ src, alt, className, quality = 'auto', width, height }) {
  const [imageSrc, setImageSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica se é uma URL do Supabase
    if (src.includes('supabase.co')) {
      // Adiciona parâmetros de transformação
      const url = new URL(src);
      url.searchParams.set('quality', quality);
      if (width) url.searchParams.set('width', width);
      if (height) url.searchParams.set('height', height);
      setImageSrc(url.toString());
    } else {
      setImageSrc(src);
    }
  }, [src, quality, width, height]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onLoad={() => setIsLoading(false)}
      style={{
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out'
      }}
    />
  );
}

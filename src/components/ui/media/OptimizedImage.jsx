import { useState, useEffect } from 'react';

export default function OptimizedImage({ src, alt, className, quality = 'auto', width, height, priority = false, loading = 'lazy', style }) {
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

  // Cria um estilo que combina as props com o estilo existente
  const combinedStyle = {
    opacity: isLoading ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out',
    aspectRatio: width && height ? `${width}/${height}` : 'auto',
    display: 'block', // Evita espaço extra abaixo da imagem
    ...(style || {})
  };

  return (
    <div className="optimized-image-container" style={{ position: 'relative', width: '100%', height: 'auto' }}>
      {/* Placeholder para reservar espaço enquanto a imagem carrega */}
      {isLoading && width && height && (
        <div 
          style={{
            width: '100%',
            aspectRatio: `${width}/${height}`,
            backgroundColor: '#f3f4f6',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : loading}
        width={width}
        height={height}
        onLoad={() => setIsLoading(false)}
        style={combinedStyle}
      />
    </div>
  );
}

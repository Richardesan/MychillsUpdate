import React, { useEffect } from 'react';
import { Box, Card, CardContent, Typography, Avatar, Button } from '@mui/joy';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

type SlideData = {
  id: number;
  header: string;
  paragraph: string;
  name: string;
  title: string;
  avatarUrl: string;
};

type PropType = {
  slides: SlideData[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollToSlide = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);

    // Set initial state
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <Box sx={{ maxWidth: '48rem', mx: 'auto', overflow: 'hidden' }}>
      {/* Carousel */}
      <Box
        ref={emblaRef}
        sx={{
          display: 'flex',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
          }}
        >
          {slides.map((slide, index) => {
            // Scale the currently focused card larger and adjust neighbors
            const isCenterCard = index === selectedIndex;
            const isAdjacentCard =
              index === selectedIndex - 1 || index === selectedIndex + 1;

            const scale = isCenterCard
              ? 1.2 // Center card scale
              : isAdjacentCard
              ? 0.9 // Adjacent cards scale
              : 0.8; // Other cards scale

            const opacity = isCenterCard
              ? 1
              : isAdjacentCard
              ? 0.8
              : 0.5; // Fade cards further away

            return (
              <Card
                key={slide.id}
                sx={{
                  flex: '0 0 30%', // 3 cards visible
                  transform: `scale(${scale})`,
                  opacity,
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  borderRadius: 'md',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'background.level2',
                }}
              >
                <CardContent>
                  {/* Header */}
                  <Typography level="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {slide.header}
                  </Typography>

                  {/* Paragraph */}
                  <Typography level="body2" sx={{ mb: 3 }}>
                    {slide.paragraph}
                  </Typography>
                </CardContent>

                {/* Footer with Avatar and Name */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    mt: 'auto',
                  }}
                >
                  <Avatar
                    src={slide.avatarUrl}
                    alt={slide.name}
                    sx={{ width: 36, height: 36, mr: 1 }}
                  />
                  <Box>
                    <Typography level="body2" sx={{ fontWeight: 'bold' }}>
                      {slide.name}
                    </Typography>
                    <Typography level="body3">{slide.title}</Typography>
                  </Box>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>

      {/* Dots */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        {slides.map((_, index) => (
          <Button
            key={index}
            onClick={() => scrollToSlide(index)}
            variant={index === selectedIndex ? 'solid' : 'outlined'}
            sx={{
              borderRadius: '50%',
              minWidth: '2rem',
              height: '2rem',
              mx: 0.5,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default EmblaCarousel;

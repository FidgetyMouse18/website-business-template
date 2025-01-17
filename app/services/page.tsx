'use client'

import { Container, Title, SimpleGrid, Card, Text, BackgroundImage, Overlay, Stack } from '@mantine/core'
import Image from 'next/image'
import businessConfig from '../businessConfig'

export default function Services() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": businessConfig.services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": service.title,
            "description": service.description,
            "url": `https://www.${businessConfig.domain}/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`
          }))
        })
      }} />

      <BackgroundImage
        src={businessConfig.images.services.background}
        h={400}
        pos="relative"
      >
        <Overlay color="#000" opacity={0.6} />
        <Container size="lg" h="100%" pos="relative" style={{ zIndex: 2 }}>
          <Stack h="100%" justify="center" style={{ color: 'white' }}>
            <Title order={1} size="h1">Our Services</Title>
            <Text size="xl" maw={600}>Discover our range of professional services</Text>
          </Stack>
        </Container>
      </BackgroundImage>

      <Container size="lg" py="xl">
        {businessConfig.services.map((service, index) => (
          <div key={index} id={service.title.toLowerCase().replace(/\s+/g, '-')} style={{ marginBottom: index !== businessConfig.services.length - 1 ? 80 : 0 }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb="xl">
              {index % 2 === 0 ? (
                <>
                  <Stack justify="center">
                    <Title order={2} size="h2">{service.title}</Title>
                    <Text size="lg">{service.description}</Text>
                  </Stack>
                  <Image
                    src={service.image}
                    alt={`Illustration of ${service.title}`}
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                </>
              ) : (
                <>
                  <Image
                    src={service.image}
                    alt={`Illustration of ${service.title}`}
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                  <Stack justify="center">
                    <Title order={2} size="h2">{service.title}</Title>
                    <Text size="lg">{service.description}</Text>
                  </Stack>
                </>
              )}
            </SimpleGrid>
          </div>
        ))}
      </Container>
    </>
  )
}


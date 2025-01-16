'use client'

import { Container, Title, Text, Button, SimpleGrid, Card, List, BackgroundImage, Group, Stack, Badge } from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'
import businessConfig from './businessConfig'

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": businessConfig.name,
          "url": `https://www.${businessConfig.domain}`,
          "logo": `https://www.${businessConfig.domain}${businessConfig.logo}`,
          "sameAs": businessConfig.socialMedia.map(social => social.url)
        })
      }} />

      <BackgroundImage
        src="/placeholder.svg?height=600&width=1920"
        h={600}
        pos="relative"
      >
        <Container size="lg" h="100%" pos="relative">
          <Stack h="100%" justify="center" style={{ color: 'white', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            <Title order={1} size="h1" mb="md">{businessConfig.tagline}</Title>
            <Text size="xl" mb="xl" maw={600}>{businessConfig.description}</Text>
            <Button
              component={Link}
              href="/contact"
              size="lg"
              variant="filled"
              w="fit-content"
            >
              Contact Us
            </Button>
          </Stack>
        </Container>
      </BackgroundImage>

      <Container size="lg" py="xl">
        <section aria-labelledby="our-services">
          <Title order={2} id="our-services" size="h2" mb="xl" ta="center">Our Expert Services</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {businessConfig.services.map((service, index) => (
              <Card key={index} padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src={service.image}
                    alt={`Illustration of ${service.title}`}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Card.Section>
                <Title order={3} size="h3" mt="md" mb="sm">{service.title}</Title>
                <Text>{service.description}</Text>
              </Card>
            ))}
          </SimpleGrid>
          <Group justify="center" mt="xl">
            <Button
              component={Link}
              href="/services"
              variant="light"
              size="lg"
            >
              Explore All Services
            </Button>
          </Group>
        </section>

        <section aria-labelledby="why-choose-us" style={{ marginTop: '64px' }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <div>
              <Title order={2} id="why-choose-us" size="h2" mb="xl">Why Choose Our Expertise</Title>
              <List size="lg" spacing="md">
                <List.Item>Proven track record of success</List.Item>
                <List.Item>Tailored solutions for your unique needs</List.Item>
                <List.Item>Dedicated team of industry experts</List.Item>
                <List.Item>Innovative approaches to complex challenges</List.Item>
              </List>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Team of experts collaborating on a business solution"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </SimpleGrid>
        </section>

        <section aria-labelledby="our-values" style={{ marginTop: '80px' }}>
          <BackgroundImage
            src="/placeholder.svg?height=400&width=1920"
            h={400}
          >
            <Container size="lg" h="100%" pos="relative">
              <Stack h="100%" justify="center" align="center" style={{ color: 'white', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                <Title order={2} id="our-values" size="h2" ta="center">Our Core Values</Title>
                <Text size="xl" maw={800} ta="center">
                  At {businessConfig.name}, we are committed to excellence, integrity, and innovation. 
                  Our core values guide every decision we make and every service we provide.
                </Text>
                <Group mt="md">
                  {businessConfig.values.map((value, index) => (
                    <Badge key={index} size="lg" variant="outline" color="gray">
                      {value}
                    </Badge>
                  ))}
                </Group>
              </Stack>
            </Container>
          </BackgroundImage>
        </section>
      </Container>
    </>
  )
}


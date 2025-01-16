'use client'

import { Container, Title, SimpleGrid, Card, Text, BackgroundImage, Stack } from '@mantine/core'
import Image from 'next/image'
import businessConfig from '../businessConfig'

export default function People() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": businessConfig.name,
          "url": `https://www.${businessConfig.domain}`,
          "employee": businessConfig.team.map(person => ({
            "@type": "Person",
            "name": person.name,
            "jobTitle": person.role,
            "description": person.bio,
            "image": `https://www.${businessConfig.domain}${person.image}`
          }))
        })
      }} />

      <BackgroundImage
        src="/placeholder.svg?height=400&width=1920"
        h={400}
        pos="relative"
      >
        <Container size="lg" h="100%" pos="relative">
          <Stack h="100%" justify="center" style={{ color: 'white', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            <Title order={1} size="h1">Our Expert Team</Title>
            <Text size="xl" maw={600}>Meet the talented professionals behind our success and innovation</Text>
          </Stack>
        </Container>
      </BackgroundImage>

      <Container size="lg" py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {businessConfig.team.map((person, index) => (
            <Card key={index} padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={person.image}
                  alt={`Portrait of ${person.name}, ${person.role}`}
                  width={400}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Card.Section>
              <Stack mt="md" align="center">
                <Title order={3} size="h3">{person.name}</Title>
                <Text size="lg" c="dimmed">{person.role}</Text>
                <Text size="sm" ta="center">{person.bio}</Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}


'use client'

import { Container, Grid, Stack, Text, Title, Group, useMantineTheme, useMantineColorScheme } from '@mantine/core'
import Link from 'next/link'
import businessConfig from '../businessConfig'

const Footer = () => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  return (
    <footer style={{ 
      backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], 
      color: colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9], 
      padding: '48px 0' 
    }}>
      <Container size="lg">
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Title order={3}>{businessConfig.name}</Title>
              <Text>Providing quality services since {businessConfig.foundedYear}</Text>
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Title order={3}>Quick Links</Title>
              <Stack gap="xs">
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                <Link href="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link>
                <Link href="/people" style={{ color: 'inherit', textDecoration: 'none' }}>Our People</Link>
                <Link href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link>
              </Stack>
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Title order={3}>Contact Us</Title>
              <Stack gap="xs">
                <Text>{businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.zip}</Text>
                <Text>Phone: {businessConfig.contact.phone}</Text>
                <Text>Email: {businessConfig.contact.email}</Text>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
        
        <Stack mt="xl" align="center">
          <Text ta="center">
            © {new Date().getFullYear()} {businessConfig.name}. All rights reserved.
          </Text>
          <Group gap="md">
            {businessConfig.socialMedia.map((social, index) => (
              <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {social.platform}
              </Link>
            ))}
          </Group>
        </Stack>
      </Container>
    </footer>
  )
}

export default Footer


'use client'

import { useEffect, useState } from 'react'
import { Burger, Container, Group, Drawer, Stack, Button, useMantineTheme, useMantineColorScheme, Image } from '@mantine/core'
import Link from 'next/link'
import { useDisclosure } from '@mantine/hooks'
import businessConfig from '../businessConfig'
import { IconSun, IconMoonStars } from '@tabler/icons-react'

interface HeaderProps {

}



const Header: React.FC<HeaderProps> = () => {
  const [opened, { toggle, close }] = useDisclosure(false)
  const theme = useMantineTheme()
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const toggleColorScheme = (value?: 'light' | 'dark') => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
      borderBottom: `1px solid ${colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
      zIndex: 1000
    }}>
      <Container size="lg" p="md">
        <Group justify="space-between">
          <Link href="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}>
            {businessConfig.settings.logoText === "Text" ? businessConfig.name : <Image
              src={businessConfig.logo}
              alt={`${businessConfig.name} Logo`}
              style={{ width: '100%', height: 'auto' }}
            />}
          </Link>

          <Group gap="lg">
            <Group gap="lg" visibleFrom="md">
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
              <Link href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link>
              <Link href="/people" style={{ textDecoration: 'none', color: 'inherit' }}>Our People</Link>
              <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
            </Group>

            <Button
              onClick={() => toggleColorScheme()}
              variant="subtle"
              size="md"
              style={{ padding: '8px' }}
            >
              {colorScheme === 'dark' ? (
                <IconSun size="1.2rem" stroke={1.5} />
              ) : (
                <IconMoonStars size="1.2rem" stroke={1.5} />
              )}
            </Button>

            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          </Group>
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={toggle}
        size="100%"
        padding="md"
        hiddenFrom="md"
        zIndex={1000}
      >
        <Stack>
          <Link onClick={close} href="/" style={{ textDecoration: 'none', color: 'inherit', padding: '8px 0' }}>Home</Link>
          <Link onClick={close} href="/services" style={{ textDecoration: 'none', color: 'inherit', padding: '8px 0' }}>Services</Link>
          <Link onClick={close} href="/people" style={{ textDecoration: 'none', color: 'inherit', padding: '8px 0' }}>Our People</Link>
          <Link onClick={close} href="/contact" style={{ textDecoration: 'none', color: 'inherit', padding: '8px 0' }}>Contact</Link>
        </Stack>
      </Drawer>
    </header>
  )
}

export default Header


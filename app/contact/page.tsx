'use client'

import { Container, Title, Grid, Text, TextInput, Textarea, Button, Stack, SimpleGrid, Alert } from '@mantine/core'
import { useForm } from '@mantine/form'
import Image from 'next/image'
import GoogleMap from '../components/GoogleMap'
import businessConfig from '../businessConfig'
import { useState } from 'react'
import { IconCheck, IconX } from '@tabler/icons-react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null)
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.length < 10 ? 'Message must be at least 10 characters long' : null),
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    console.log('Form submitted:', values)
    form.reset()
  }

  const fullAddress = `${businessConfig.address.street}, ${businessConfig.address.city}, ${businessConfig.address.state} ${businessConfig.address.zip}, ${businessConfig.address.country}`

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": businessConfig.name,
            "url": `https://www.${businessConfig.domain}`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": businessConfig.contact.phone,
              "contactType": "customer service"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": businessConfig.address.street,
              "addressLocality": businessConfig.address.city,
              "addressRegion": businessConfig.address.state,
              "postalCode": businessConfig.address.zip,
              "addressCountry": businessConfig.address.country
            }
          })
        }}
      />

      <Container size="lg" py="xl">
        <Title order={1} size="h1" mb="xl">Contact Our Expert Team</Title>
        
        <div style={{ marginBottom: '48px' }}>
          <GoogleMap address={fullAddress} />
        </div>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <div>
                <Title order={2} size="h2" mb="md">Get in Touch</Title>
                <Text mb="xl">We'd love to hear from you. Our expert team is ready to answer your questions and provide the professional support you need.</Text>
              </div>
              
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                <Image
                  src={businessConfig.images.contact.image1}
                  alt="Our modern office exterior"  
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <Image
                  src={businessConfig.images.contact.image2}
                  alt="Our collaborative workspace"
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </SimpleGrid>
              
              <div>
                <Title order={3} size="h3" mb="xs">Address</Title>
                <Text>{fullAddress}</Text>
              </div>
              
              <div>
                <Title order={3} size="h3" mb="xs">Phone</Title>
                <Text>{businessConfig.contact.phone}</Text>
              </div>
              
              <div>
                <Title order={3} size="h3" mb="xs">Email</Title>
                <Text>{businessConfig.contact.email}</Text>
              </div>
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }}>
          <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
                {formStatus && (
                  <Alert
                    icon={formStatus.success ? <IconCheck size="1rem" /> : <IconX size="1rem" />}
                    title={formStatus.success ? "Success!" : "Error"}
                    color={formStatus.success ? "green" : "red"}
                  >
                    {formStatus.message}
                  </Alert>
                )}

                <TextInput
                  label="Name"
                  placeholder="Your name"
                  required
                  {...form.getInputProps('name')}
                />
                
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  required
                  {...form.getInputProps('email')}
                />
                
                <Textarea
                  label="Message"
                  placeholder="How can we help you?"
                  required
                  minRows={4}
                  {...form.getInputProps('message')}
                />
                
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </Stack>
            </form>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}


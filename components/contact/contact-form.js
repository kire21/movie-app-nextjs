import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';

import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function sendMessageHandler(event) {
    event.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setFormData({ email: '', name: '', message: '' });
  }

  return (
    <Grid>
      <Box mt={6} />
      <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
        <Typography gutterBottom variant='h5'>
          Contact Us
        </Typography>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          gutterBottom
        >
          Fill up the form and our team will get back to you within 24 hours.
        </Typography>

        <CardContent>
          <form onSubmit={sendMessageHandler}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter email'
                  label='Email'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter name'
                  label='Name'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  placeholder='Type your message here'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ContactForm;

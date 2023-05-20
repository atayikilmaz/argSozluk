import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Typography, Textarea } from '@material-tailwind/react';

function Form() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });

      if (response.ok) {
        // Form submission succeeded
        // Handle success logic here
        setShowSuccessMessage(true);
        console.log('Form submitted successfully');
      } else {
        // Form submission failed
        // Handle error logic here
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }
  };

  useEffect(() => {
    if (showSuccessMessage) {
      const timeout = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [showSuccessMessage]);

  return (
    <div className="flex justify-center items-center h-screen">
      {showSuccessMessage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(76, 175, 80, 0.8)',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '4px',
            animation: 'fadeOut 1s ease-in'
          }}
        >
          Başarıyla gönderildi
        </div>
      )}
      <Card color="transparent" shadow={false} className="mx-50%">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Argüman Önerisinde Bulun
        </Typography>
        <Typography color="gray" className="mt-2 font-normal text-center">
          Bize göndermek istediğiniz argüman bilgilerini giriniz.
        </Typography>
        <form className="mt-8 mb-2 max-w-screen-lg sm:w-96" name="oneri" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="oneri" />
          <div className="mb-4 flex flex-col gap-6">
            <Input
              required
              size="lg"
              label="Argüman Başlığı"
              name="argumanBasligi"
            />
            <Textarea
              required
              size="lg"
              label="Argüman İçeriği"
              name="argumanIcerigi"
              rows={4}
            />
            <Textarea
              required
              size="lg"
              label="Kaynaklar"
              name="kaynaklar"
            />
          </div>
          <Button type="submit" className="mt-6 mb-6" style={{backgroundColor:"#d60814"}} fullWidth>
            Gönder
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Form;

import React, { useState } from 'react';
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
        
        // Clear success message after 1 second
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 1000);
      } else {
        // Form submission failed
        // Handle error logic here
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {showSuccessMessage && (
        <div className="bg-green-100 mt-4 bg-opacity-75 rounded-md text-green-600 py-2 px-4 text-center fixed top-0 left-1/2 transform -translate-x-1/2">
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
          <Button type="submit" className="mt-6 mb-6" fullWidth>
            Gönder
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Form;

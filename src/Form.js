import React, { useState } from 'react';
import { Card, Input, Button, Typography, Textarea } from '@material-tailwind/react';

export default function Example() {
  const [formValues, setFormValues] = useState({
    argumanBasligi: '',
    argumanIcerigi: '',
    kaynaklar: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here

    // Clear input values
    setFormValues({
      argumanBasligi: '',
      argumanIcerigi: '',
      kaynaklar: ''
    });

    // Show success message
    setShowSuccessMessage(true);

    // Hide success message after 1 second
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 1000);
  };

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false} className="mx-50%">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Argüman Önerisinde Bulun
        </Typography>
        <Typography color="gray" className="mt-2 font-normal text-center">
          Bize göndermek istediğiniz argüman bilgilerini giriniz.
        </Typography>
        <form className="mt-8 mb-2 max-w-screen-lg sm:w-96" onSubmit="submit" name="oneri" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="oneri" /> {/* Hidden input for Netlify form submission */}
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Argüman Başlığı"
              name="argumanBasligi"
              value={formValues.argumanBasligi}
              onChange={handleChange}
              onKeyPress={handleKeyPress} // Add the onKeyPress event handler
            />
            <Textarea
              size="lg"
              label="Argüman İçeriği"
              name="argumanIcerigi"
              value={formValues.argumanIcerigi}
              onChange={handleChange}
              rows={4}
            />
            <Textarea
              size="lg"
              label="Kaynaklar"
              name="kaynaklar"
              value={formValues.kaynaklar}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="mt-6 mb-6" fullWidth>
            Gönder
          </Button>
        </form>
        {showSuccessMessage && (
          <div className="bg-green-100 bg-opacity-75 rounded-md text-green-600 py-2 px-4 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Başarıyla gönderildi
          </div>
        )}
      </Card>
    </div>
  );
}

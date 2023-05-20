import React, { useState } from 'react';
import { Card, Input, Button, Typography, Textarea } from '@material-tailwind/react';

export default function Example() {
  const [formValues, setFormValues] = useState({
    argumanBasligi: '',
    argumanIcerigi: '',
    kaynaklar: ''
  });
 

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
        
        
      </Card>
    </div>
  );
}

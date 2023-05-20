import React, { useState } from 'react';
import { Card, Input, Button, Typography, Textarea } from '@material-tailwind/react';

export default function Example() {
 


  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false} className="mx-50%">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Argüman Önerisinde Bulun
        </Typography>
        <Typography color="gray" className="mt-2 font-normal text-center">
          Bize göndermek istediğiniz argüman bilgilerini giriniz.
        </Typography>
        <form className="mt-8 mb-2 max-w-screen-lg sm:w-96"  name="oneri" method="POST">
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

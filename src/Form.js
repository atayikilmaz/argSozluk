import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Example() {
    return (
      <div className="flex justify-center mt-36">
          <Card color="transparent" shadow={false} className="mx-50%" >
            <Typography variant="h4" color="blue-gray" className="text-center">
              Argüman Önerisinde Bulun
            </Typography>
            <Typography color="gray" className="mt-2 font-normal" class="text-center">
              Bize göndermek istediğiniz argüman bilgilerini giriniz.
            </Typography>
            <form className="mt-8 mb-2  max-w-screen-lg sm:w-96" netlify>
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Argüman Başlığı" />
                <Input size="lg" label="Argüman İçeriği" />
                <Input size="lg" label="Kaynaklar" />
              </div>
              
              <Button className="mt-6 mb-6" fullWidth>
                Gönder
              </Button>
            </form>
          </Card>
      </div>
    );
  }
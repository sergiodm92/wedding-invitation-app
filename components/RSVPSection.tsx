import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HeartIcon } from 'lucide-react';

export default function RSVPSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md mx-auto">
        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-8">
            <h2 className="text-4xl font-script text-center mb-8 text-pink-600 dark:text-pink-300">Confirma tu Asistencia</h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg text-gray-700 dark:text-gray-300">Nombre</Label>
                <Input id="name" placeholder="Tu nombre completo" className="mt-1 bg-pink-50 dark:bg-gray-700 border-pink-200 dark:border-pink-800" />
              </div>
              <div>
                <Label htmlFor="guests" className="text-lg text-gray-700 dark:text-gray-300">Número de Invitados</Label>
                <Select>
                  <SelectTrigger className="mt-1 bg-pink-50 dark:bg-gray-700 border-pink-200 dark:border-pink-800">
                    <SelectValue placeholder="Selecciona el número de invitados" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full text-lg bg-pink-500 hover:bg-pink-600 text-white">
                Confirmar Asistencia
                <HeartIcon className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
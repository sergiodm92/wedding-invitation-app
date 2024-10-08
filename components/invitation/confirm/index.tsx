"use client";
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { HeartIcon } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const ConfirmSection = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('');
  const [vegetarianMenu, setVegetarianMenu] = useState('');
  const [song, setSong] = useState('');
  const [message, setMessage] = useState('');
  const [alergic, setAlergic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos del formulario
    console.log({ name, guests, vegetarianMenu, song, message, alergic });
    // Resetear el formulario o mostrar un mensaje de confirmación
  };

  return (
    <section className="py-24 px-4 bg-bg2">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-8">
            <h2 className="text-4xl font-script text-center mb-8 text-pink-600 dark:text-pink-300">Confirma tu Asistencia</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg text-gray-700 dark:text-gray-300">Nombre</Label>
                <Input
                  id="name"
                  placeholder="Tu nombre completo"
                  className="mt-1 bg-pink-50 dark:bg-gray-700 border-pink-200 dark:border-pink-800"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="guests" className="text-lg text-gray-700 dark:text-gray-300">Número de Invitados</Label>
                <Select value={guests} onValueChange={setGuests}>
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
              <div>
                <Label className="text-lg text-gray-700 dark:text-gray-300">¿Necesitas menú vegetariano?</Label>
                <RadioGroup value={vegetarianMenu} onValueChange={setVegetarianMenu} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="vegetarian-yes" />
                    <Label htmlFor="vegetarian-yes">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="vegetarian-no" />
                    <Label htmlFor="vegetarian-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="song" className="text-lg text-gray-700 dark:text-gray-300">¿Es alergico a alguna comida? (opcional)</Label>
                <Input
                  id="song"
                  placeholder="Nombre de la canción"
                  className="mt-1 bg-pink-50 dark:bg-gray-700 border-pink-200 dark:border-pink-800"
                  value={song}
                  onChange={(e) => setAlergic(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="song" className="text-lg text-gray-700 dark:text-gray-300">¿Qué canción no puede faltar? (opcional)</Label>
                <Input
                  id="song"
                  placeholder="Nombre de la canción"
                  className="mt-1 bg-pink-50 dark:bg-gray-700 border-pink-200 dark:border-pink-800"
                  value={song}
                  onChange={(e) => setSong(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg text-gray-700 dark:text-gray-300">Un mensaje para los novios (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí"
                  className="mt-1 bg-pink-50 dark:bg-gray-700 border-pink-200 dark:border-pink-800"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full text-lg bg-pink-500 hover:bg-pink-600 text-white">
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
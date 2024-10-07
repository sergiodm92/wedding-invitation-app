"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const allowedPhoneNumbers = ['+543875185752', '9876543210', '5555555555'];

export default function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [codeTwoFactor, setCodeTwoFactor] = useState<number | null>(null)
  const router = useRouter();

  useEffect(() => {
    setIsValidNumber(allowedPhoneNumbers.includes(phoneNumber));
  }, [phoneNumber]);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidNumber) {
      setCodeTwoFactor(123456)
      toast.success('Código de verificación enviado por WhatsApp');
      setIsVerifying(true);
    } else {
      toast.error('Número de teléfono no autorizado');
    }
  };

  const handleCodeVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode === codeTwoFactor?.toString()) {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/invitation');
    } else {
      toast.error('Código de verificación inválido');
    }
  };

  return (
    <Card className="w-full bg-white dark:bg-gray-800 shadow-lg border-0">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
          {isVerifying ? 'Verificar Código' : 'Iniciar Sesión'}
        </h2>
        {!isVerifying ? (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <div>
              <Input
                type="tel"
                placeholder="Número de teléfono"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-pink-500 hover:bg-pink-600 text-white transition-colors duration-300"
              disabled={!isValidNumber}
            >
              Enviar Código
            </Button>
          </form>
        ) : (
          <form onSubmit={handleCodeVerification} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Código de verificación"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
                className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              />
            </div>
            <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white transition-colors duration-300">
              Verificar
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
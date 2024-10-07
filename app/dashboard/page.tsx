"use client"

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

type Guest = {
  id: number;
  name: string;
  confirmed: boolean;
};

export default function Dashboard() {
  const [guests, setGuests] = useState<Guest[]>([]);

  useEffect(() => {
    // Simular carga de datos de invitados
    const mockGuests: Guest[] = [
      { id: 1, name: 'Ana García', confirmed: true },
      { id: 2, name: 'Carlos Rodríguez', confirmed: false },
      { id: 3, name: 'Laura Martínez', confirmed: true },
    ];
    setGuests(mockGuests);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard de Invitados</h1>
      <Card>
        <CardHeader>
          <CardTitle>Lista de Invitados Confirmados</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {guests.map((guest) => (
                <TableRow key={guest.id}>
                  <TableCell>{guest.name}</TableCell>
                  <TableCell>{guest.confirmed ? 'Confirmado' : 'Pendiente'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
import mongoose, { Schema, Document } from 'mongoose';

export interface IGuest extends Document {
    name: string;
    guests: number;
    vegetarianMenu: boolean;
    song?: string;
    message?: string;
    alergic?: string;
}

const GuestSchema = new Schema({
    name: { type: String, required: true },
    guests: { type: Number, required: true },
    vegetarianMenu: { type: Boolean, required: true },
    song: { type: String },
    message: { type: String },
    alergic: { type: String },
});

export default mongoose.models.Guest || mongoose.model<IGuest>('Guest', GuestSchema);

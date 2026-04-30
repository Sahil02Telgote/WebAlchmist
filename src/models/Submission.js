import mongoose from 'mongoose';

const SubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
  },
  projectType: {
    type: String,
  },
  message: {
    type: String,
  },
  estimatedCost: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema);

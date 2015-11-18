/**
 * User model schema
 *
 * @author  NullDivision
 * @version 0.1.0
 * @flow
 */

import mongoose from 'mongoose';

const USER_SCHEMA = new mongoose.Schema({name: String, role: {type: String, enum: ['ADMIN', 'USER']}, skills: []});

export default mongoose.model('User', USER_SCHEMA);

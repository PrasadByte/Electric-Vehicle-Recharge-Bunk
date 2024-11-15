const Bunk = require('../models/Bunk');

// Create new EV Bunk (admin)
exports.createBunk = async (req, res) => {
  const { name, address, mobile, googleMapLocation, availableSlots } = req.body;

  try {
    const bunk = new Bunk({ name, address, mobile, googleMapLocation, availableSlots });
    await bunk.save();

    res.status(201).json({ message: 'Bunk created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all Bunks (for users to view)
exports.getBunks = async (req, res) => {
  try {
    const bunks = await Bunk.find();
    res.json(bunks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Bunk by ID
exports.getBunkById = async (req, res) => {
  try {
    const bunk = await Bunk.findById(req.params.id);
    res.json(bunk);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

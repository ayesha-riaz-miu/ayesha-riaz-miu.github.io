const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Playlist = require('../models/Playlist');

// Fetch user's playlist
router.get('/', authMiddleware, async (req, res) => {
  try {
    const playlist = await Playlist.find({ user: req.user.id });
    res.json(playlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add song to user's playlist
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { songId } = req.body;
    const playlistItem = new Playlist({
      song: songId,
      user: req.user.id
    });
    await playlistItem.save();
    res.json({ message: 'Song added to playlist' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Other playlist endpoints for updating and deleting songs

module.exports = router;
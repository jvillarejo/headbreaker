const Pair = require('./pair')
const {anchor, Anchor} = require('./anchor')
const Puzzle = require('./puzzle');
const Piece = require('./piece');
const {Tab, Slot, None} = require('./insert');
const {NullValidator, PieceValidator, PuzzleValidator} = require('./validator');
const Structure = require('./structure');
const Outline = require('./outline');
const Canvas = require('./canvas');
const Manufacturer = require('./manufacturer');
const {InsertSequence, ...generators} = require('./sequence');
const Metadata = require('./metadata');
const SpatialMetadata = require('./spatial-metadata');
const {vector, ...Vector} = require('./vector');

/**
 * @module headbreaker
 */
module.exports = {
  anchor,
  vector,
  Anchor,
  Puzzle,
  Piece,
  Canvas,
  Manufacturer,
  InsertSequence,
  PieceValidator,
  PuzzleValidator,
  NullValidator,
  Tab,
  Slot,
  None,
  Pair,
  Metadata,
  SpatialMetadata,
  Outline,
  Structure,
  Vector,
  generators,
  painters: {
    Dummy: require('./dummy-painter'),
    Konva: require('./konva-painter')
  }
}

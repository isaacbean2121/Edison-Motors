// Import required modules
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

const { createClient } = require('@supabase/supabase-js');
const { buildMockOptions } = require('./mock-options');

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

async function fetchOptionsFromSupabase(truckId) {
  if (!supabase) return null;

  const queries = {
    '500': async () => {
      const [lights, steeringWheel, mirrors, fifthWheel, pto, battery_pack, generator500, frame_rail, wheelbase] =
        await Promise.all([
          supabase.from('lights').select('*'),
          supabase.from('steering_wheel').select('*'),
          supabase.from('mirrors').select('*'),
          supabase.from('fifth_wheel').select('*'),
          supabase.from('pto').select('*'),
          supabase.from('battery_pack').select('*'),
          supabase.from('generator_pack').select('*').in('id', [1]),
          supabase.from('frame_rail').select('*'),
          supabase.from('wheelbase').select('*'),
        ]);
      return {
        lights,
        steeringWheel,
        mirrors,
        fifthWheel,
        pto,
        battery_pack,
        generator_pack: generator500,
        frame_rail,
        wheelbase,
      };
    },
    '750': async () => {
      const [lights750, steeringWheel750, mirrors750, fifthWheel750, pto750, battery_pack750, generator750, frame_rail750, wheelbase750] =
        await Promise.all([
          supabase.from('lights').select('*'),
          supabase.from('steering_wheel').select('*'),
          supabase.from('mirrors').select('*'),
          supabase.from('fifth_wheel').select('*'),
          supabase.from('pto').select('*'),
          supabase.from('battery_pack').select('*'),
          supabase.from('generator_pack').select('*').in('id', [1]),
          supabase.from('frame_rail').select('*').in('id', [2, 3]),
          supabase.from('wheelbase').select('*'),
        ]);
      return {
        lights: lights750,
        steeringWheel: steeringWheel750,
        mirrors: mirrors750,
        fifthWheel: fifthWheel750,
        pto: pto750,
        battery_pack: battery_pack750,
        generator_pack: generator750,
        frame_rail: frame_rail750,
        wheelbase: wheelbase750,
      };
    },
    '10': async () => {
      const [lights10, steeringWheel10, mirrors10, fifthWheel10, pto10, battery_pack10, generator10, frame_rail10, wheelbase10] =
        await Promise.all([
          supabase.from('lights').select('*'),
          supabase.from('steering_wheel').select('*'),
          supabase.from('mirrors').select('*'),
          supabase.from('fifth_wheel').select('*'),
          supabase.from('pto').select('*'),
          supabase.from('battery_pack').select('*'),
          supabase.from('generator_pack').select('*'),
          supabase.from('frame_rail').select('*').in('id', [1]),
          supabase.from('wheelbase').select('*'),
        ]);
      return {
        lights: lights10,
        steeringWheel: steeringWheel10,
        mirrors: mirrors10,
        fifthWheel: fifthWheel10,
        pto: pto10,
        battery_pack: battery_pack10,
        generator_pack: generator10,
        frame_rail: frame_rail10,
        wheelbase: wheelbase10,
      };
    },
  };

  const handler = queries[truckId];
  if (!handler) return null;
  return handler();
}

app.get('/api/all-options', async (req, res) => {
  const { truckId } = req.query;

  try {
    const remote = await fetchOptionsFromSupabase(String(truckId));
    if (remote) {
      return res.json(remote);
    }

    if (['500', '750', '10'].includes(String(truckId))) {
      return res.json(buildMockOptions());
    }

    res.status(400).json({ error: 'Unknown truckId' });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.json(buildMockOptions());
  }
});

app.get('/api/slides', async (req, res) => {
  const { truckId } = req.query;
  try {
    const slides = await fetchSlidesForTruck(truckId);
    res.json(slides);
  } catch (error) {
    console.error('Error fetching slides:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function fetchSlidesForTruck(truckId) {
  if (!supabase) return [];

  switch (truckId) {
    case '500': {
      const { data: slides500, error } = await supabase
        .from('truck_category')
        .select('image')
        .eq('id', 1);
      if (error) throw error;
      return slides500;
    }
    case '750': {
      const { data: slides750, error: error750 } = await supabase
        .from('truck_category')
        .select('image')
        .eq('id', 3);
      if (error750) throw error750;
      return slides750;
    }
    default:
      return [];
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  if (!supabase) {
    console.log('Supabase not configured — serving mock truck options.');
  }
});

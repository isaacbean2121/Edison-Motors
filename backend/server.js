// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 8000;

const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = '';
const SUPABASE_ANON_KEY = '';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

app.get('/api/all-options', (req, res) => {
  const {truckId} = req.query;
  try{
    switch(truckId){
      case '500':
        const handleCase500 = async () => {
          const [lights, steeringWheel, mirrors, fifthWheel, pto, battery_pack, generator500, frame_rail, wheelbase] = await Promise.all([
            supabase.from('lights').select('*'),
            supabase.from('steering_wheel').select('*'),
            supabase.from('mirrors').select('*'),
            supabase.from('fifth_wheel').select('*'),
            supabase.from('pto').select('*'),
            supabase.from('battery_pack').select('*'),
            supabase.from('generator_pack').select('*').in('id', [1]),
            supabase.from('frame_rail').select('*'),
            supabase.from('wheelbase').select('*')
          ]);
          const allOptions500 = { lights: lights, steeringWheel: steeringWheel, mirrors: mirrors, fifthWheel: fifthWheel, pto: pto, battery_pack: battery_pack, generator_pack: generator500, frame_rail: frame_rail, wheelbase: wheelbase}
          res.json(allOptions500);
        };

        handleCase500();
        break;

        case '750':
          const handleCase750 = async () => {
            const [lights750, steeringWheel750, mirrors750, fifthWheel750, pto750, battery_pack750, generator750, frame_rail750, wheelbase750 ] = await Promise.all([
              supabase.from('lights').select('*'),
              supabase.from('steering_wheel').select('*'),
              supabase.from('mirrors').select('*'),
              supabase.from('fifth_wheel').select('*'),
              supabase.from('pto').select('*'),
              supabase.from('battery_pack').select('*'),
              supabase.from('generator_pack').select('*').in('id', [1]),
              supabase.from('frame_rail').select('*').in('id', [2,3]),
              supabase.from('wheelbase').select('*')
            ]);
            const allOptions750 = { lights: lights750, steeringWheel: steeringWheel750, mirrors: mirrors750, fifthWheel: fifthWheel750, pto: pto750, battery_pack: battery_pack750, generator_pack: generator750, frame_rail: frame_rail750, wheelbase: wheelbase750};
            res.json(allOptions750);
          };

          handleCase750();
          break;

          case '10':
            const handleCase10 = async () => {
              const [lights10, steeringWheel10, mirrors10, fifthWheel10, pto10, battery_pack10, generator10, frame_rail10, wheelbase10 ] = await Promise.all([
                supabase.from('lights').select('*'),
                supabase.from('steering_wheel').select('*'),
                supabase.from('mirrors').select('*'),
                supabase.from('fifth_wheel').select('*'),
                supabase.from('pto').select('*'),
                supabase.from('battery_pack').select('*'),
                supabase.from('generator_pack').select('*'),
                supabase.from('frame_rail').select('*').in('id', [1]),
                supabase.from('wheelbase').select('*')
              ]);
              const allOptions10 = { lights: lights10, steeringWheel: steeringWheel10, mirrors: mirrors10, fifthWheel: fifthWheel10, pto: pto10, battery_pack: battery_pack10, generator_pack: generator10, frame_rail: frame_rail10, wheelbase: wheelbase10};
              res.json(allOptions10);
            }
            handleCase10();
            break;      
  }
  }
  catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
    
  }
}
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
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
  switch (truckId) {
      case '500':
          const { data: slides500, error } = await supabase
            .from('truck_category')
            .select('image')
            .eq('id', 1); // Using eq() instead of in() for single ID
          if (error) throw error;
          return slides500;
      case '750':
          const { data: slides750, error: error750 } = await supabase
            .from('truck_category')
            .select('image')
            .eq('id', 3);
          if (error750) throw error750;
          return slides750;

      
  }
  
}
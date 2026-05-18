function option(id, name) {
  return {
    id,
    created_at: new Date().toISOString(),
    name,
    customize_option_id: id,
    description: null,
    price: 0,
    asset: "",
  };
}

function wrap(data) {
  return {
    error: null,
    data,
    count: data.length,
    status: 200,
    statusText: "OK",
  };
}

function buildMockOptions() {
  return {
    lights: wrap([option(1, "LED Headlights"), option(2, "Standard Halogen")]),
    steeringWheel: wrap([option(1, "Leather"), option(2, "Standard")]),
    mirrors: wrap([option(1, "Heated"), option(2, "Standard")]),
    fifthWheel: wrap([option(1, "Sliding"), option(2, "Fixed")]),
    pto: wrap([option(1, "Enabled"), option(2, "None")]),
    battery_pack: wrap([option(1, "Extended Range"), option(2, "Standard")]),
    generator_pack: wrap([option(1, "High Output"), option(2, "Standard")]),
    frame_rail: wrap([option(1, "Heavy Duty"), option(2, "Standard")]),
    wheelbase: wrap([option(1, "Long"), option(2, "Standard")]),
  };
}

module.exports = { buildMockOptions };

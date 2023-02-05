let productsArray = [

    // TODO: Add the infotext for each product

    { id: 1, navDisplayName: "Surface Observations", urlName: "bigsfc", displayName: "Surface Observations", infoText: "" },
    { id: 2, navDisplayName: "Base Reflectivity", urlName: "rgnlrad", displayName: "Base Reflectivity", infoText: "" },
    { id: 3, navDisplayName: "Visible Satellite", urlName: "1kmv", displayName: "Visible Satellite", infoText: "" },
    { id: 4, navDisplayName: "MSL Pressure/Wind", urlName: "pmsl", displayName: "MSL Pressure/Wind", infoText: "" },
    { id: 5, navDisplayName: "Temp/Dewpt/Wind", urlName: "ttd", displayName: "Temp/Dewpt/Wind", infoText: "" },
    { id: 6, navDisplayName: "Moisture Convergence", urlName: "mcon", displayName: "Moisture Convergence", infoText: "" },
    { id: 7, navDisplayName: "Theta-E Advection", urlName: "thea", displayName: "Theta-E Advection", infoText: "" },
    { id: 8, navDisplayName: "Mixing Ratio and Theta", urlName: "mxth", displayName: "Mixing Ratio and Theta", infoText: "" },
    { id: 9, navDisplayName: "2-hr Pressure Change", urlName: "pchg", displayName: "2-hr Pressure Change", infoText: "" },
    { id: 10, navDisplayName: "3-hr Temperature Change", urlName: "temp_chg", displayName: "3-hr Temperature Change", infoText: "" },
    { id: 11, navDisplayName: "3-hr Dewpoint Change", urlName: "dwpt_chg", displayName: "3-hr Dewpoint Change", infoText: "" },
    { id: 12, navDisplayName: "3-hr 100 mb Mixing Ratio Change", urlName: "mixr_chg", displayName: "3-hr 100 mb Mixing Ratio Change", infoText: "" },
    { id: 13, navDisplayName: "3-hr Theta-E Change", urlName: "thte_chg", displayName: "3-hr Theta-E Change", infoText: "" },
    { id: 14, navDisplayName: "925 mb Analysis", urlName: "925mb", displayName: "925 mb Analysis", infoText: "" },
    { id: 15, navDisplayName: "850 mb Analysis", urlName: "850mb", displayName: "850 mb Analysis", infoText: "" },
    { id: 16, navDisplayName: "700 mb Analysis", urlName: "700mb", displayName: "700 mb Analysis", infoText: "" },
    { id: 17, navDisplayName: "500 mb Analysis", urlName: "500mb", displayName: "500 mb Analysis", infoText: "" },
    { id: 18, navDisplayName: "300 mb Analysis", urlName: "300mb", displayName: "300 mb Analysis", infoText: "" },
    { id: 19, navDisplayName: "Deep Moisture Convergence", urlName: "dlcp", displayName: "Deep Moisture Convergence", infoText: "" },
    { id: 20, navDisplayName: "Surface Frontogenesis", urlName: "sfnt", displayName: "Surface Frontogenesis", infoText: "" },
    { id: 21, navDisplayName: "850 mb Temperature Advection", urlName: "tadv", displayName: "850 mb Temperature Advection", infoText: "" },
    { id: 22, navDisplayName: "850 mb Frontogenesis", urlName: "8fnt", displayName: "850 mb Frontogenesis", infoText: "" },
    { id: 23, navDisplayName: "700 mb Frontogenesis", urlName: "7fnt", displayName: "700 mb Frontogenesis", infoText: "" },
    { id: 24, navDisplayName: "850-700 mb Frontogenesis", urlName: "857f", displayName: "850-700 mb Frontogenesis", infoText: "" },
    { id: 25, navDisplayName: "700-500 mb Frontogenesis", urlName: "75ft", displayName: "700-500 mb Frontogenesis", infoText: "" },
    { id: 26, navDisplayName: "700-400 mb Diff. Vorticity Advection", urlName: "vadv", displayName: "700-400 mb Diff. Vorticity Advection", infoText: "" },
    { id: 27, navDisplayName: "400-250 mb Pot. Vorticity Advection", urlName: "padv", displayName: "400-250 mb Pot. Vorticity Advection", infoText: "" },
    { id: 28, navDisplayName: "850-250 mb Diff. Divergence", urlName: "ddiv", displayName: "850-250 mb Diff. Divergence", infoText: "" },
    { id: 29, navDisplayName: "300 mb Jet Circulation", urlName: "ageo", displayName: "300 mb Jet Circulation", infoText: "" },
    { id: 30, navDisplayName: "12-hr 500 mb Hght Change", urlName: "500mb_chg", displayName: "12-hr 500 mb Hght Change", infoText: "" },
    { id: 31, navDisplayName: "Instantaneous Contraction Rate (sfc)", urlName: "icon", displayName: "Instantaneous Contraction Rate (sfc)", infoText: "" },
    { id: 32, navDisplayName: "Fluid Trapping (sfc)", urlName: "trap", displayName: "Fluid Trapping (sfc)", infoText: "" },
    { id: 33, navDisplayName: "Velocity Tensor Magnitude (sfc)", urlName: "vtm", displayName: "Velocity Tensor Magnitude (sfc)", infoText: "" },
    { id: 34, navDisplayName: "Divergence and Vorticity (sfc)", urlName: "dvvr", displayName: "Divergence and Vorticity (sfc)", infoText: "" },
    { id: 35, navDisplayName: "Deformation and Axes of Dilitation (sfc)", urlName: "def", displayName: "Deformation and Axes of Dilitation (sfc)", infoText: "" },
    { id: 36, navDisplayName: "Fluid Trapping (250 mb)", urlName: "trap_250", displayName: "Fluid Trapping (250 mb)", infoText: "" },
    { id: 37, navDisplayName: "Fluid Trapping (500 mb)", urlName: "trap_500", displayName: "Fluid Trapping (500 mb)", infoText: "" },
    { id: 38, navDisplayName: "SBCAPE", urlName: "sbcp", displayName: "SBCAPE", infoText: "" },
    { id: 39, navDisplayName: "100 mb MLCAPE", urlName: "mlcp", displayName: "100 mb MLCAPE", infoText: "" },
    { id: 40, navDisplayName: "MUCAPE / LPL Height", urlName: "mucp", displayName: "MUCAPE / LPL Height", infoText: "" },
    { id: 41, navDisplayName: "SB Lifted Index", urlName: "muli", displayName: "SB Lifted Index", infoText: "S" },
    { id: 42, navDisplayName: "Mid-level Lapse Rates", urlName: "laps", displayName: "Mid-level Lapse Rates", infoText: "" },
    { id: 43, navDisplayName: "Low-Level Lapse Rates", urlName: "lllr", displayName: "Low-Level Lapse Rates", infoText: "" },
    { id: 44, navDisplayName: "Normalized CAPE", urlName: "ncap", displayName: "Normalized CAPE", infoText: "" },
    { id: 45, navDisplayName: "Downdraft CAPE", urlName: "dcape", displayName: "Downdraft CAPE", infoText: "" },
    { id: 46, navDisplayName: "LFC Height", urlName: "lfch", displayName: "LFC Height", infoText: "" },
    { id: 47, navDisplayName: "LCL Height", urlName: "lclh", displayName: "LCL Height", infoText: "" },
    { id: 48, navDisplayName: "LCL-LFC RH", urlName: "lfrh", displayName: "LCL-LFC RH", infoText: "" },
    { id: 49, navDisplayName: "3-hr SBCAPE Change", urlName: "sbcp_chg", displayName: "3-hr SBCAPE Change", infoText: "" },
    { id: 50, navDisplayName: "3-hr 100 mb MLCAPE Change", urlName: "mlcp_chg", displayName: "3-hr 100 mb MLCAPE Change", infoText: "" }    
];

export function getProduct(id) {
    return productsArray.find(p => p.id === id);
}

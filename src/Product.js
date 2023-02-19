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
    { id: 41, navDisplayName: "SB Lifted Index", urlName: "muli", displayName: "SB Lifted Index", infoText: "" },
    { id: 42, navDisplayName: "Mid-level Lapse Rates", urlName: "laps", displayName: "Mid-level Lapse Rates", infoText: "" },
    { id: 43, navDisplayName: "Low-Level Lapse Rates", urlName: "lllr", displayName: "Low-Level Lapse Rates", infoText: "" },
    { id: 44, navDisplayName: "Normalized CAPE", urlName: "ncap", displayName: "Normalized CAPE", infoText: "" },
    { id: 45, navDisplayName: "Downdraft CAPE", urlName: "dcape", displayName: "Downdraft CAPE", infoText: "" },
    { id: 46, navDisplayName: "LFC Height", urlName: "lfch", displayName: "LFC Height", infoText: "" },
    { id: 47, navDisplayName: "LCL Height", urlName: "lclh", displayName: "LCL Height", infoText: "" },
    { id: 48, navDisplayName: "LCL-LFC RH", urlName: "lfrh", displayName: "LCL-LFC RH", infoText: "" },
    { id: 49, navDisplayName: "3-hr SBCAPE Change", urlName: "sbcp_chg", displayName: "3-hr SBCAPE Change", infoText: "" },
    { id: 50, navDisplayName: "3-hr 100 mb MLCAPE Change", urlName: "mlcp_chg", displayName: "3-hr 100 mb MLCAPE Change", infoText: "" },
    { id: 51, navDisplayName: "3-hr MUCAPE Change", urlName: "mucp_chg", displayName: "3-hr MUCAPE Change", infoText: "" },
    { id: 52, navDisplayName: "3-hr Low-Level LR Change", urlName: "lllr_chg", displayName: "3-hr Low-Level LR Change", infoText: "" },
    { id: 53, navDisplayName: "6-hr MidLevel LR Change", urlName: "laps_chg", displayName: "6-hr MidLevel LR Change", infoText: "" },
    { id: 54, navDisplayName: "850-300mb Mean Wind", urlName: "mnwd", displayName: "850-300mb Mean Wind", infoText: "" },
    { id: 55, navDisplayName: "0-6km Shear Vector", urlName: "shr6", displayName: "0-6km Shear Vector", infoText: "" },
    { id: 56, navDisplayName: "0-8km Shear Vector", urlName: "shr8", displayName: "0-8km Shear Vector", infoText: "" },
    { id: 57, navDisplayName: "Effective Shear", urlName: "eshr", displayName: "Effective Shear", infoText: "" },
    { id: 58, navDisplayName: "BRN Shear", urlName: "brns", displayName: "BRN Shear", infoText: "" },
    { id: 59, navDisplayName: "0-1km SR Helicity", urlName: "srh1", displayName: "0-1km SR Helicity", infoText: "" },
    { id: 60, navDisplayName: "0-3km SR Helecity", urlName: "srh3", displayName: "0-3km SR Helecity", infoText: "" },
    { id: 61, navDisplayName: "Effective SR Helicity", urlName: "effh", displayName: "Effective SR Helicity", infoText: "" },
    { id: 62, navDisplayName: "0-1km Shear Vector", urlName: "shr1", displayName: "0-1km Shear Vector", infoText: "" },
    { id: 63, navDisplayName: "0-2km SR Winds", urlName: "llsr", displayName: "0-2km SR Winds", infoText: "" },
    { id: 64, navDisplayName: "4-6km SR Winds", urlName: "mlsr", displayName: "4-6km SR Winds", infoText: "" },
    { id: 65, navDisplayName: "9-11km SR Winds", urlName: "ulsr", displayName: "9-11km SR Winds", infoText: "" },
    { id: 66, navDisplayName: "Anvil Level SR Winds", urlName: "alsr", displayName: "Anvil Level SR Winds", infoText: "" },
    { id: 67, navDisplayName: "850 and 500 mb Winds", urlName: "xover", displayName: "850 and 500 mb Winds", infoText: "" },
    { id: 68, navDisplayName: "3-hr 0-3km SR Helicity Change", urlName: "srh3_chg", displayName: "3-hr 0-3km SR Helicity Change", infoText: "" },
    { id: 69, navDisplayName: "3-hr 0-1km Shear Change", urlName: "shr1_chg", displayName: "3-hr 0-1km Shear Change", infoText: "" },
    { id: 70, navDisplayName: "3-hr 0-6km Shear Change", urlName: "shr6_chg", displayName: "3-hr 0-6km Shear Change", infoText: "" },
    { id: 71, navDisplayName: "Supercell Composite", urlName: "scp", displayName: "Supercell Composite", infoText: "" },
    { id: 72, navDisplayName: "Supercell Composite (left-moving)", urlName: "lscp", displayName: "Supercell Composite (left-moving)", infoText: "" },
    { id: 73, navDisplayName: "Sig. Tornado (fixed layer)", urlName: "stor", displayName: "Sig. Tornado (fixed layer)", infoText: "" },
    { id: 74, navDisplayName: "Sig. Tornado (effective layer)", urlName: "stpc", displayName: "Sig. Tornado (effective layer)", infoText: "" },
    { id: 75, navDisplayName: "Cond. Prob. Sigtor (Eqn 1)", urlName: "sigt1", displayName: "Cond. Prob. Sigtor (Eqn 1)", infoText: "" },
    { id: 76, navDisplayName: "Cond. Prob. Sigtor (Eqn 2)", urlName: "sigt2", displayName: "Cond. Prob. Sigtor (Eqn 2)", infoText: "" },
    { id: 77, navDisplayName: "Sig. Hail Parameter", urlName: "sigh", displayName: "Sig. Hail Parameter", infoText: "" },
    { id: 78, navDisplayName: "Derecho Composite", urlName: "dcp", displayName: "Derecho Composite", infoText: "" },
    { id: 79, navDisplayName: "Craven/Brooks SigSvr", urlName: "cbsig", displayName: "Craven/Brooks SigSvr", infoText: "" },
    { id: 80, navDisplayName: "3km EHI", urlName: "ehi3", displayName: "3km EHI", infoText: "" },
    { id: 81, navDisplayName: "1km EHI", urlName: "ehi1", displayName: "1km EHI", infoText: "" },
    { id: 82, navDisplayName: "3km VGP", urlName: "vgp3", displayName: "3km VGP", infoText: "" },
    { id: 83, navDisplayName: "Bulk Richardson Number", urlName: "brn", displayName: "Bulk Richardson Number", infoText: "" },
    { id: 84, navDisplayName: "Non-Supercell Tornado", urlName: "nstp", displayName: "Non-Supercell Tornado", infoText: "" },
    { id: 85, navDisplayName: "MCS Maintenance", urlName: "mcsm", displayName: "MCS Maintenance", infoText: "" },
    { id: 86, navDisplayName: "MUCAPE / Eff. Bulk Shear", urlName: "cpsh", displayName: "MUCAPE / Eff. Bulk Shear", infoText: "" },
    { id: 87, navDisplayName: "MULI / 850 and 500mb Winds", urlName: "comp", displayName: "MULI / 850 and 500mb Winds", infoText: "" },
    { id: 88, navDisplayName: "LCL Hght / 0-1km SRH ", urlName: "lcls", displayName: "LCL Hght / 0-1km SRH ", infoText: "" },
    { id: 89, navDisplayName: "0-3km LR / 0-3km MLCAPE", urlName: "lr3c", displayName: "0-3km LR / 0-3km MLCAPE", infoText: "" },
    { id: 90, navDisplayName: "0-3km CAPE / Sfc Vorticity", urlName: "3cvr", displayName: "0-3km CAPE / Sfc Vorticity", infoText: "" },
    { id: 91, navDisplayName: "Sfc Dewpoint / 700-500mb LR", urlName: "tdlr", displayName: "Sfc Dewpoint / 700-500mb LR", infoText: "" },
    { id: 92, navDisplayName: "Hail Parameters", urlName: "hail", displayName: "Hail Parameters", infoText: "" },
    { id: 93, navDisplayName: "Lowest 3km max., Theta-e diff., MUCAPE, and 0-3km vector shear", urlName: "qlcs1", displayName: "QLCS Forecasting Parameters", infoText: "" },
    { id: 94, navDisplayName: "Lowest 3km max., Theta-e diff., MLCAPE, and 0-3km vector shear", urlName: "qlcs2", displayName: "QLCS Forecasting Parameters", infoText: "" },
    { id: 95, navDisplayName: "Precipitable Water", urlName: "pwtr", displayName: "Precipitable Water", infoText: "" },
    { id: 96, navDisplayName: "850mb Moisture Transport", urlName: "tran", displayName: "850mb Moisture Transport", infoText: "" },
    { id: 97, navDisplayName: "Upwind Propagation Vector", urlName: "prop", displayName: "Upwind Propagation Vector", infoText: "" },
    { id: 98, navDisplayName: "Precipitation Potential Placement", urlName: "peff", displayName: "Precipitation Potential Placement", infoText: "" },

    { id: 99, navDisplayName: "Near Freezing Sfc Temp.", urlName: "fztp", displayName: "Near Freezing Sfc Temp.", infoText: "" },
    { id: 100, navDisplayName: "Sfc Wet Bulb Temp.", urlName: "swbt", displayName: "Sfc Wet Bulb Temp.", infoText: "" },
    { id: 101, navDisplayName: "Freezing Level Info.", urlName: "fzlv", displayName: "Freezing Level Info.", infoText: "" },
    { id: 102, navDisplayName: "Critical Thickness", urlName: "thck", displayName: "Critical Thickness", infoText: "" },
    { id: 103, navDisplayName: "800-750mb EPVg", urlName: "epvl", displayName: "800-750mb EPVg", infoText: "" },
    { id: 104, navDisplayName: "650-500mb EPVg", urlName: "epvm", displayName: "650-500mb EPVg", infoText: "" },
    { id: 105, navDisplayName: "Lake Effect Snow 1", urlName: "les1", displayName: "Lake Effect Snow 1", infoText: "" },
    { id: 106, navDisplayName: "Lake Effect Snow 2", urlName: "les2", displayName: "Lake Effect Snow 2", infoText: "" },

    { id: 107, navDisplayName: "Sfc RH", urlName: "Temp.", displayName: "Sfc RH", infoText: "" },
    { id: 108, navDisplayName: "Fosberg Index", urlName: "fosb", displayName: "Fosberg Index", infoText: "" },
    { id: 109, navDisplayName: "Low Altitude Haines Index", urlName: "lhan", displayName: "Low Altitude Haines Index", infoText: "" },
    { id: 110, navDisplayName: "Mid Altitude Haines Index", urlName: "mhan", displayName: "Mid Altitude Haines Index", infoText: "" },
    { id: 111, navDisplayName: "High Altitude Haines Index", urlName: "hhan", displayName: "High Altitude Haines Index", infoText: "" },
    { id: 112, navDisplayName: "Lower Atmos. Severity Index", urlName: "lasi", displayName: "Lower Atmos. Severity Index", infoText: "" }
];

export function getProduct(id) {
    return productsArray.find(p => p.id === id);
}

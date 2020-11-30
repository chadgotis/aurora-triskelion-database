const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fields = {
  type: String,
};
const apcSchema = new Schema({
  year: {
    type: String,
    required: true,
  },
  current: {
    type: Boolean,
    default: false,
  },
  governorGeneral: fields,
  executiveViceGovernorGeneral: fields,
  districtViceGovernorGeneral: fields,
  provExecutiveSecretary: fields,
  provKeeperOfTheChest: fields,
  provAuditor: fields,
  regentInformationAndCommunication: fields,
  regentMembershipAndOrganization: fields,
  regentBudgetAndFinance: fields,
  regentInterior: fields,
  regentSpecialProjects: fields,
  regentAlumniAffairs: fields,
});

module.exports = Apc = mongoose.model("apcOfficers", apcSchema);

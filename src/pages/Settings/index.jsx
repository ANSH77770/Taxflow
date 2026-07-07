import CompanySettingsForm from "../../components/settings/CompanySettingsForm";
import {
  Building2,
  ShieldCheck,
  Banknote,
  FileText,
} from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Configure your TaxFlow workspace.
          </p>

        </div>

      </div>

      {/* Quick Settings Cards */}

      <div className="grid grid-cols-4 gap-5">

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <Building2
            className="text-blue-600 mb-3"
            size={30}
          />

          <h2 className="font-semibold">
            Company
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Manage business information.
          </p>

        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <Banknote
            className="text-green-600 mb-3"
            size={30}
          />

          <h2 className="font-semibold">
            Banking
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Update bank & payment details.
          </p>

        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <ShieldCheck
            className="text-purple-600 mb-3"
            size={30}
          />

          <h2 className="font-semibold">
            GST
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            GST registration information.
          </p>

        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">

          <FileText
            className="text-orange-600 mb-3"
            size={30}
          />

          <h2 className="font-semibold">
            Invoice
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Configure invoice preferences.
          </p>

        </div>

      </div>

      {/* Company Settings Form */}

      <CompanySettingsForm />

    </div>
  );
}
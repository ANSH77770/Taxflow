import CompanySettingsForm from "../../components/settings/CompanySettingsForm";

export default function Settings() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500">
          Manage your company information.
        </p>
      </div>

      <CompanySettingsForm />

    </div>
  );
}
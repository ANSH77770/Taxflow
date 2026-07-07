import { useCompanyStore } from "../../store/useCompanyStore";

export default function CompanyProfile() {
  const company = useCompanyStore((state) => state.company);

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">
        Company Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <p className="text-gray-500 text-sm">
            Company Name
          </p>

          <p className="font-semibold text-lg">
            {company.name}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            GSTIN
          </p>

          <p>{company.gstin}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Phone
          </p>

          <p>{company.phone}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Email
          </p>

          <p>{company.email}</p>
        </div>

        <div className="md:col-span-2">
          <p className="text-gray-500 text-sm">
            Address
          </p>

          <p>{company.address}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Bank
          </p>

          <p>{company.bankName}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Account Number
          </p>

          <p>{company.accountNumber}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            IFSC
          </p>

          <p>{company.ifsc}</p>
        </div>

      </div>
    </div>
  );
}
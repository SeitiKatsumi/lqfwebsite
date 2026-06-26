import { countAdminUsers, getAdminUserByUsername, verifyAdminUser, type AdminUser } from "@/lib/leadStore";

export type AdminSession = {
  authorized: boolean;
  user: AdminUser | null;
  usingMasterPassword: boolean;
};

export function authenticateAdmin(request: Request): AdminSession {
  const username = request.headers.get("x-admin-username")?.trim().toLowerCase() || "";
  const password = request.headers.get("x-admin-password") || "";
  const legacyKey = request.headers.get("x-admin-key") || "";
  const adminPassword = process.env.ADMIN_PASSWORD || "";

  if (username && password) {
    const user = verifyAdminUser(username, password);
    if (user) {
      return { authorized: true, user, usingMasterPassword: false };
    }

    if (adminPassword && password === adminPassword) {
      return {
        authorized: true,
        user: getAdminUserByUsername(username) ?? { id: "master", username, name: username || "Admin", photo: null, created_at: "", updated_at: "" },
        usingMasterPassword: true
      };
    }
  }

  if (legacyKey && adminPassword && legacyKey === adminPassword) {
    return {
      authorized: true,
      user: { id: "master", username: "admin", name: "Admin", photo: null, created_at: "", updated_at: "" },
      usingMasterPassword: true
    };
  }

  if (!adminPassword && process.env.NODE_ENV !== "production" && countAdminUsers() === 0) {
    return {
      authorized: true,
      user: { id: "dev", username: "dev", name: "Dev", photo: null, created_at: "", updated_at: "" },
      usingMasterPassword: true
    };
  }

  return { authorized: false, user: null, usingMasterPassword: false };
}

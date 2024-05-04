import { ProductEntity } from '../../models/product/product.entity';
import { ProductModel } from '../../models/product/product.model';
import { SupplierEntity } from '../../models/supplier/supplier.entity';

export class ProductMapper {
  static toEntity = (
    data: ProductModel,
    supplierList: SupplierEntity[]
  ): ProductEntity => {
    return {
      id: data.id,
      name: data.name,
      detail: data.detail,
      price: data.price,
      stock: data.stock,
      status: this.activeToModelShape(data.status),
      supplier_id: this.supplierToModelShape(supplierList, data.supplier),
    };
  };
  static toModel = (
    entity: ProductEntity,
    supplierList: SupplierEntity[]
  ): ProductModel => {
    return {
      id: entity.id,
      name: entity.name,
      detail: entity.detail,
      price: entity.price,
      stock: entity.stock,
      status: this.activeToEntityShape(entity.status),
      supplier: this.supplierToEntityShape(supplierList, entity.supplier_id),
    };
  };

  private static activeToEntityShape = (active: boolean): string => {
    return active ? 'Activo' : 'Inactivo';
  };

  private static activeToModelShape = (active: string): boolean => {
    return active === 'Activo' ? true : false;
  };

  private static supplierToEntityShape = (
    supplierList: SupplierEntity[],
    supplier_id: number
  ): string => {
    return (
      supplierList.find((supplier) => supplier.id === supplier_id)?.name || 'a'
    );
  };

  private static supplierToModelShape = (
    supplierList: SupplierEntity[],
    supplierName: string
  ): number => {
    return (
      supplierList.find((supplier: SupplierEntity) =>
        this.checkSupplierName(supplier.name, supplierName)
      )?.id || -1
    );
  };

  private static checkSupplierName = (
    supplierName: string,
    supplierNameSearch: string
  ) => {
    return supplierName === supplierNameSearch;
  };
}
